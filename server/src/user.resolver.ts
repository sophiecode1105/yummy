import { MailerService } from '@nestjs-modules/mailer';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Resolver()
export class UserResolver {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  @Query()
  async getAllUser(): Promise<User[]> {
    return this.prisma.user.findMany({ include: { recipes: true } });
  }

  @Query()
  async getUser(@Args('id') id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
      include: { recipes: true },
    });
  }

  @Mutation()
  async joinUser(@Args('info') info: User): Promise<User> {
    info.password = await bcrypt.hash(info.password, 3);
    return this.prisma.user.create({ data: info });
  }

  @Mutation()
  async emailCertify(@Args('email') email: string): Promise<Number> {
    const existUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existUser) {
      let number = Math.floor(Math.random() * 1000000) + 100000; // ★★난수 발생 ★★★★★
      if (number > 1000000) {
        number = number - 100000;
      }

      await this.mailerService.sendMail({
        from: 'malove0330@naver.com', //보내는 주소 입력
        to: `${email}`, //위에서 선언해준 받는사람 이메일
        subject: '안녕하세요', //메일 제목
        html: `<div
        style='
        text-align: center;
        width: 50%;
        height: 60%;
        margin: 15%;
        padding: 20px;
        box-shadow: 1px 1px 3px 0px #999;
        '>
        인증번호는 ${number} 입니다.
        <br/><br/><br/><br/></div>`,
      });

      return number;
    } else {
      return 0;
    }
  }
  @Mutation()
  async updateUser(@Args('info') info: User): Promise<User> {
    return this.prisma.user.update({ where: { id: info.id }, data: info });
  }

  @Mutation()
  async deleteUser(@Args('id') id: number): Promise<Boolean> {
    try {
      await this.prisma.user.delete({ where: { id } });

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  @Mutation()
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    const findUser = await this.prisma.user.findUnique({ where: { email } });
    if (findUser) {
      const passCheck = await bcrypt.compare(password, findUser.password);

      if (passCheck) {
        return findUser;
      }
    }
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/modules/user/entities/user.entity';
import { repositoryMockUserFactory } from 'src/modules/user/mock/user.mock';
import { UserService } from 'src/modules/user/services/user.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.registerAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_SECRET'),
            signOptions: {
              expiresIn: 3600,
            },
          }),
          inject: [ConfigService],
        }),
      ],
      providers: [
        AuthService,
        UserService,
        {
          provide: getRepositoryToken(User),
          useFactory: repositoryMockUserFactory,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

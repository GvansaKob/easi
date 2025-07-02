import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/entities/user.entity';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: Partial<AuthService>;

  const mockUser: User = {
    id: 1,
    email: 'test@example.com',
    mot_de_passe: 'hashed',
    nom: 'Doe',
    prenom: 'John',
    date_de_naissance: new Date(),
    statut: 'utilisateur',
    profil_complet: true,
    createdAt: new Date(),
    image: '',
    favoris: [],
  };

  beforeEach(async () => {
    authService = {
      validateUser: jest.fn().mockResolvedValue(mockUser),
      login: jest.fn().mockReturnValue({
        access_token: 'fake-token',
        user: mockUser,
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('devrait retourner un token et un user', async () => {
      const dto: LoginDto = {
        email: 'test@example.com',
        mot_de_passe: '123456',
      };

      const result = await controller.login(dto);

      expect(authService.validateUser).toHaveBeenCalledWith('test@example.com', '123456');
      expect(authService.login).toHaveBeenCalledWith(mockUser);
      expect(result).toEqual({
        access_token: 'fake-token',
        user: mockUser,
      });
    });
  });
});

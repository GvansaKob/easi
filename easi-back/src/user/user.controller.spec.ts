import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

describe('UserController', () => {
  let controller: UserController;
  let mockUserService: Partial<UserService>;

  beforeEach(async () => {
    mockUserService = {
      findByEmail: jest.fn().mockResolvedValue({
        id: 1,
        email: 'test@example.com',
        nom: 'Doe',
        prenom: 'John',
      } as User),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('devrait retourner le profil utilisateur', async () => {
    const req = { user: { email: 'test@example.com' } };
    const result = await controller.getProfile(req as any);

    expect(result.email).toBe('test@example.com');
    expect(result.nom).toBe('Doe');
    expect(result.prenom).toBe('John');
  });
});

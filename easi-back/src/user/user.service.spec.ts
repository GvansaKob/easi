import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ConflictException } from '@nestjs/common';

jest.mock('bcrypt');

describe('UserService', () => {
  let service: UserService;
  let userRepository: jest.Mocked<Partial<Repository<User>>>;

  const mockUser: User = {
    id: 1,
    email: 'test@example.com',
    mot_de_passe: 'hashedpassword',
    nom: 'Dupont',
    prenom: 'Jean',
    date_de_naissance: new Date('1990-01-01'),
    image: 'avatar.jpg',
    createdAt: new Date(),
    favoris: [],
    statut: 'utilisateur',
    profil_complet: true,
  };

  beforeEach(async () => {
    userRepository = {
      findOneBy: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      update: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: userRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('doit enregistrer un nouvel utilisateur avec mot de passe hashé', async () => {
      (userRepository.findOneBy as jest.Mock).mockResolvedValue(null);
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashed123');
      (userRepository.create as jest.Mock).mockReturnValue(mockUser);
      (userRepository.save as jest.Mock).mockResolvedValue(mockUser);

      const userData = {
        nom: 'Dupont',
        prenom: 'Jean',
        email: 'test@example.com',
        mot_de_passe: '123456',
        date_de_naissance: new Date('1990-01-01'),
        statut: 'étudiant',
      };

      const result = await service.register(userData);

      expect(bcrypt.hash).toHaveBeenCalledWith('123456', 10);
      expect(userRepository.create).toHaveBeenCalledWith({
        ...userData,
        mot_de_passe: 'hashed123',
        profil_complet: false,
      });
      expect(userRepository.save).toHaveBeenCalled();
      expect(result).toEqual(mockUser);
    });

    it('doit lever une erreur si l’email est déjà utilisé', async () => {
      (userRepository.findOneBy as jest.Mock).mockResolvedValue(mockUser);

      await expect(
        service.register({
          email: 'test@example.com',
          mot_de_passe: '123456',
        }),
      ).rejects.toThrow(ConflictException);
    });

    it('doit lever une erreur si le mot de passe est manquant', async () => {
      await expect(
        service.register({
          email: 'test@example.com',
        }),
      ).rejects.toThrow('Le mot de passe est obligatoire');
    });
  });

  describe('findByEmail', () => {
    it('doit retourner un utilisateur trouvé', async () => {
      (userRepository.findOneBy as jest.Mock).mockResolvedValue(mockUser);

      const result = await service.findByEmail('test@example.com');

      expect(userRepository.findOneBy).toHaveBeenCalledWith({ email: 'test@example.com' });
      expect(result).toEqual(mockUser);
    });

    it('doit retourner null si aucun utilisateur trouvé', async () => {
      (userRepository.findOneBy as jest.Mock).mockResolvedValue(null);

      const result = await service.findByEmail('unknown@example.com');

      expect(result).toBeNull();
    });
  });

  describe('updateUserImage', () => {
    it("doit mettre à jour l'image de l'utilisateur", async () => {
      (userRepository.update as jest.Mock).mockResolvedValue(undefined);

      await service.updateUserImage(1, 'new-image.jpg');

      expect(userRepository.update).toHaveBeenCalledWith(1, { image: 'new-image.jpg' });
    });
  });

  describe('updateProfile', () => {
    it('doit mettre à jour le profil utilisateur', async () => {
      const updateData = { nom: 'NouveauNom' };
      (userRepository.update as jest.Mock).mockResolvedValue(undefined);
      (userRepository.findOneBy as jest.Mock).mockResolvedValue({
        ...mockUser,
        nom: 'NouveauNom',
      });

      const result = await service.updateProfile(1, updateData);

      expect(userRepository.update).toHaveBeenCalledWith(1, updateData);
      expect(result.nom).toBe('NouveauNom');
    });

    it('doit lever une erreur si utilisateur non trouvé après update', async () => {
      (userRepository.update as jest.Mock).mockResolvedValue(undefined);
      (userRepository.findOneBy as jest.Mock).mockResolvedValue(null);

      await expect(service.updateProfile(1, {})).rejects.toThrow('Utilisateur non trouvé');
    });
  });
});

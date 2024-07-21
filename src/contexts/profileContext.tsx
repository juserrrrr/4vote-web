'use client';
import { createContext, useState } from 'react';

interface ProfileContextData {
  nome: string;
  email: string;
  cpf: string;
  URLPerfil: string | null;
}

interface ProfileContextProps {
  profile: ProfileContextData;
  updateProfile: (data: ProfileContextData) => void;
}

const defaultValues: ProfileContextData = {
  nome: '',
  email: '',
  cpf: '',
  URLPerfil: '',
};

export const ProfileContext = createContext<ProfileContextProps>({
  profile: defaultValues,
  updateProfile: () => {},
});

interface ProfileProviderProps {
  children: React.ReactNode;
  initialValues: ProfileContextData;
}

export function ProfileProvider({ children, initialValues }: ProfileProviderProps) {
  const [profile, setProfile] = useState<ProfileContextData>(initialValues);

  function updateProfile(data: ProfileContextData) {
    setProfile(data);
  }

  return <ProfileContext.Provider value={{ profile, updateProfile }}>{children}</ProfileContext.Provider>;
}

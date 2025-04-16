import {
  AlSubjectStream,
  ArtSubjects,
  BioScienceSubjects,
  CommerceSubjects,
  EduLevel,
  LanguageMedium,
  OlSubjcts,
  PhysicalScienceSubjects,
  TechnologySubjects,
} from "../subjects/SubjectTypes";

export type TeacherType = "PRIVATE TEACHER" | "SCHOOL TEACHER";

export interface TeacherCreationType {
  id?: number;
  name: string;
  age: number | null;
  nicNumber: string;
  whatsappNumber: string;
  teachetType: TeacherType | null;
  languageMedium: LanguageMedium | null;
  eduLevel: EduLevel | null;
  alSubjectStream?: AlSubjectStream | null;
  physicalScienceSubjects?: PhysicalScienceSubjects | null;
  bioScienceSubjects?: BioScienceSubjects | null;
  commerceSubjects?: CommerceSubjects | null;
  artSubjects?: ArtSubjects | null;
  technologySubjects?: TechnologySubjects | null;
  olSubjects?: OlSubjcts | null;
  password: string;
  confirmPassword: string;
  certificatesUpload?: string;
  approvalStatus?: string | null;
}

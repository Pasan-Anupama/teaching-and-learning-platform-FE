import {
  AlSubjectStream,
  EduLevel,
  OlFirstCategory,
  OlSecondCategory,
  OlThirdCategory,
  languageMedium,
} from "../subjects/SubjectTypes";

export interface StudentCreationType {
  id?: number;
  name: string;
  age: string;
  email: string;
  whatsappNumber: string;
  medium: languageMedium | null;
  eduLevel: EduLevel | null;
  alStream: AlSubjectStream | null;
  olFirstCategory: OlFirstCategory | null;
  olSecondcategory: OlSecondCategory | null;
  olThirdCategiry: OlThirdCategory | null;
  s3Key: string;
}

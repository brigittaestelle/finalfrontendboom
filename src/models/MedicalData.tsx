export interface MedicalData {
  Result: Result;
}
export interface Result {
  Error: string;
  Total: number;
  Query: Query;
  Language: string;
  MyHFHeading: string;
  Resources: Resources;
}
export interface Query {
  ApiVersion: string;
  ApiType: string;
  TopicId: string;
  ToolId: string;
  CategoryId: string;
  PopulationId: string;
  Keyword: string;
  Who: string;
  Age: string;
  Sex: string;
  Pregnant: string;
  TobaccoUse: string;
  SexuallyActive: string;
  Category: string;
  Lang: string;
  Type: string;
  ReturnType: string;
  Callback: string;
  HealthfinderPage: string;
  APiType: string;
}
export interface Resources {
  Resource?: ResourceEntity[] | null;
}
export interface ResourceEntity {
  Type: string;
  Id: number;
  Title: string;
  TranslationId: number;
  TranslationTitle: string;
  Categories: string;
  Populations: string;
  MyHFTitle: string;
  MyHFDescription: string;
  MyHFCategory: string;
  MyHFCategoryHeading: string;
  LastUpdate: string;
  ImageUrl: string;
  ImageAlt: string;
  AccessibleVersion: string;
  RelatedItems: RelatedItems;
  Sections: Sections;
  MoreInfoItems: MoreInfoItems;
  HealthfinderLogo: string;
  HealthfinderUrl: string;
}
export interface RelatedItems {
  RelatedItem?: RelatedItemEntity[] | null;
}
export interface RelatedItemEntity {
  Type: string;
  Id: number;
  Title: string;
  Url: string;
}
export interface Sections {
  Section?: SectionEntity[] | null;
}
export interface SectionEntity {
  Title: string;
  Description: string;
  Content: string;
}
export interface MoreInfoItems {
  MoreInfoItem?: MoreInfoItemEntity[] | null;
}
export interface MoreInfoItemEntity {
  Title: string;
  Url: string;
}

import { type IAboutUs } from "../interface/aboutUsInterface";

const DEFAULT_ABOUT_US: IAboutUs = {
  ourMember: [
    {
      id: '-1',
      name: '',
      description: '',
      imageUrl: '',
    }
  ],
  partners: [
    {
      name: '',
      imageUrl: '',
    }
  ],
  videoUrl: '',
}

export { DEFAULT_ABOUT_US };
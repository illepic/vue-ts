export type Disposition =
  | 'surly'
  | 'ambivalent'
  | 'distant'
  | 'snuggly'
  | 'sleepy';

export interface ICat {
  name: string;
  disposition: Disposition;
  fedDisposition: Disposition;
  img: string;
  isFed: boolean;
}

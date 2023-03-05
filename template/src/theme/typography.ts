import { TextStyle } from 'react-native';

type Key =
  | 'largeTitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'headline'
  | 'body'
  | 'callout'
  | 'subhead'
  | 'footnote'
  | 'caption1'
  | 'caption2';

export const typography: { [key in Key]: TextStyle } = {
  largeTitle: {
    fontSize: 34,
    lineHeight: 41,
  },
  title1: {
    fontSize: 28,
    lineHeight: 34,
  },
  title2: {
    fontSize: 22,
    lineHeight: 28,
  },
  title3: {
    fontSize: 20,
    lineHeight: 25,
  },
  headline: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 22,
  },
  body: {
    fontSize: 17,
    lineHeight: 22,
  },
  callout: {
    fontSize: 16,
    lineHeight: 21,
  },
  subhead: {
    fontSize: 15,
    lineHeight: 20,
  },
  footnote: {
    fontSize: 13,
    lineHeight: 18,
  },
  caption1: {
    fontSize: 12,
    lineHeight: 16,
  },
  caption2: {
    fontSize: 11,
    lineHeight: 13,
  },
};

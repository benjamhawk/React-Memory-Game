export type Theme = {
  name: 'animal',
  fontColor: string
  headerBgColor: string,
  headerDataColor: string
  messageBarFontColor: string,
  messageBarBgColor: string,
  messageBarScoreColor: string,
  warningColor: string
  bgColor: string,
  cardColor: string,
  cardShadow: string
}

export const animalTheme: Theme = {
  name: 'animal',
  fontColor: '#FFF',
  headerBgColor: '#4B7221',
  headerDataColor: '#E6D55D',
  messageBarFontColor: '#4B7221',
  messageBarScoreColor: '#2d2d2d',
  messageBarBgColor: '#CCC',
  warningColor: 'red',
  bgColor: 'linear-gradient(90deg, rgba(217,175,52) 0%, rgba(210,179,86) 50%, rgba(214,168,32) 100%)',
  cardColor: '#CA4113',
  cardShadow: '#44434370'
}

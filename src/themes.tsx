export type Theme = {
  name: 'animal',
  fontColor: string
  headerBgColor: string,
  headerDataColor: string
  messageBarFontColor: string,
  messageBarBgColor: string,
  messageBarNeutralColor: string,
  warningColor: string
  bgColor: string,
  cardColor: string,
  cardShadow: string
}

export const animalTheme: Theme = {
  name: 'animal',
  fontColor: '#FFF',
  headerBgColor: '#303451',
  headerDataColor: '#E6D55D',
  messageBarFontColor: '#303451',
  messageBarNeutralColor: '#2d2d2d',
  messageBarBgColor: '#CCC',
  warningColor: 'red',
  bgColor: 'linear-gradient(90deg, rgba(75,134,147,1) 0%, rgba(109,139,145,1) 50%, rgba(75,134,147,1) 100%)',
  cardColor: '#83A57A',
  cardShadow: '#44434370'
}

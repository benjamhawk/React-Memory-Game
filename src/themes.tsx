export type Theme = {
  name: string,
  fontColor: string
  headerBgColor: string,
  headerDataColor: string,
  headerIconColor: string,
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
  headerIconColor: '#83A57A',
  messageBarFontColor: '#303451',
  messageBarNeutralColor: '#2d2d2d',
  messageBarBgColor: '#CCC',
  warningColor: 'red',
  bgColor: 'linear-gradient(90deg, rgba(75,134,147,1) 0%, rgba(109,139,145,1) 50%, rgba(75,134,147,1) 100%)',
  cardColor: '#83A57A',
  cardShadow: '#44434370'
}

export const carTheme: Theme = {
  name: 'car',
  fontColor: '#FFF',
  headerBgColor: '#50514F',
  headerDataColor: '#FFE066',
  headerIconColor: '#70C1B3',
  messageBarFontColor: '#50514F',
  messageBarNeutralColor: '#50514F',
  messageBarBgColor: '#FFF',
  warningColor: 'red',
  bgColor: 'linear-gradient(90deg, rgba(112,193,179,1) 0%, rgba(112,193,179,0.5) 50%, rgba(112,193,179,1) 100%)',
  cardColor: '#FFE066',
  cardShadow: '#44434370'
}

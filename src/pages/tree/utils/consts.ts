import i18n from '../../../app/providers/localization/config'

const { global: {t: localization} } = i18n

type Kinship = {
  role: string,
  title: string,
  label: string
}

export const kinships: Kinship[] = [
  {
    role: 'parent',
    title: 'father',
    label: localization('family.father')
  },
  {
    role: 'parent',
    title: 'mother',
    label: localization('family.mother')
  },
  {
    role: 'child',
    title: 'daughter',
    label: localization('family.daughter')
  },
  {
    role: 'child',
    title: 'son',
    label: localization('family.son')
  }
]
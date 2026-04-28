import Section from './Section'
import Icon from './Icon'


type Component = typeof Section & {
    Icon: typeof Icon
}

const IconSection = Section as Component
IconSection.Icon = Icon

export default IconSection
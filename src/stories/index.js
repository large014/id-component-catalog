import { storiesOf } from '@storybook/vue'

import HelloWorld from './../components/HelloWorld.vue'
import Sample_Sliderbar from './../components/Ui/sliderbar/Sample_Sliderbar'


storiesOf('HelloWorld', module)
    .add('simple', () => ({
        components: { HelloWorld },
        template: `<HelloWorld>KEEP IT SIMPLE</HelloWorld>`
    }))

storiesOf('Sample_Sliderbar', module)
    .add('sliderbar', () => ({
        components: { Sample_Sliderbar },
        template: `<Sample_Sliderbar>KEEP IT SIMPLE</Sample_Sliderbar>`
    }))

import { configure } from '@storybook/vue'
import Vue from 'vue'

const loadStories = () => {
    require("../src/stories/index")
    // require('./../src/stories')
}

configure(loadStories, module)
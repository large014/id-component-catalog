import { storiesOf } from '@storybook/vue'

import HelloWorld from './../components/HelloWorld.vue'

//---------------------------------------------------------------------------------------
// UI系コンポーネント
//---------------------------------------------------------------------------------------
// 1-10_nakamura
import Sample_HamburgerBtn_CloseSet from './../components/Ui/hm_closebtn_set/Sample_HamburgerBtn'
import Sample_HambergerBtn_ArrowSet from './../components/Ui/hm_arrow_set/Sample_HambergerBtn_ArrowSet'
import Sample_Textarea_JustHeight from './../components/Ui/textarea-just-height/Sample_Textarea_JustHeight'
import Sample_ImageBtn from './../components/Ui/image-btn/Sample_ImageBtn'

// 1-10_matsuda
import Sample_SpotModal from './../components/Ui/spot-modal/Sample_SpotModal'
import Sample_DragDrop from './../components/Ui/drag-drop-container/Sample_DragDrop'

// 1-10_sakai
import Sample_GradationBtn from './../components/Ui/gradation-btn/Sample_GradationBtn'

// 1-10_hagihara
import Sample_ProgressPagenation from './../components/Ui/progress-pagination/Sample_ProgressPagenation'
import Sample_Text_Vertical_Middle from './../components/Ui/textarea-vertical-middle/Sample_Text_Vertical_Middle'

// 1-10_hirao
import Sample_Sliderbar from './../components/Ui/sliderbar/Sample_Sliderbar'


//---------------------------------------------------------------------------------------
// 機能系コンポーネント
//---------------------------------------------------------------------------------------
// 1-10_takatori
// import Sample_RandomText from './../components/Function/randam-text/Sample_RandomText'

// 1-10_nakamura
import Sample_Gmap from './../components/Function/gmap/Sample_Gmap'
import Sample_Add_Balloon from './../components/Function/add-balloon/Sample_Add_Balloon'

// 1-10_iizuka
import Sample_TextTruncate from './../components/Function/text-truncate/Sample_TextTruncate'
import Sample_PictureBook_Ui from './../components/Function/picture-book-ui/Sample_PictureBook_Ui'

// 1-10_matsuda
import Sample_SimpleAudioPlayer from './../components/Function/simple-audio-player/Sample_SimpleAudioPlayer'
import Sample_Input_FileValidate from './../components/Function/input-file-validate/Sample_Input_FileValidate'
import Sample_DiffChecker from './../components/Function/diff-checker/Sample_DiffChecker'


//---------------------------------------------------------------------------------------
// 演出系コンポーネント
//---------------------------------------------------------------------------------------
// 1-10_takatori
import Sample_RandomText from './../components/Effects/randam-text/Sample_RandomText'

// 1-10_iizuka
import Sample_FadeText from './../components/Effects/fade-text/Sample_FadeText'

// 1-10_matsuda
import Sample_SvgTextStroke from './../components/Effects/svg-textstroke/Sample_SvgTextStroke'



//---------------------------------------------------------------------------------------
// その他コンポーネント ストーリー
//---------------------------------------------------------------------------------------
storiesOf('HelloWorld', module)
    .add('simple', () => ({
        components: { HelloWorld },
        template: `<HelloWorld>KEEP IT SIMPLE</HelloWorld>`
    }))



//---------------------------------------------------------------------------------------
// UI系コンポーネント ストーリー
//---------------------------------------------------------------------------------------
storiesOf('UI', module)
    //---- 1-10_nakamura
    .add('hamburgerBtn_close_set', () => ({
        components: { Sample_HamburgerBtn_CloseSet },
        template: `<Sample_HamburgerBtn_CloseSet>KEEP IT SIMPLE</Sample_HamburgerBtn_CloseSet>`
    }))
    .add('hamburgerBtn_arrow_set', () => ({
        components: { Sample_HambergerBtn_ArrowSet },
        template: `<Sample_HambergerBtn_ArrowSet>KEEP IT SIMPLE</Sample_HambergerBtn_ArrowSet>`
    }))
    .add('textarea_just_height', () => ({
        components: { Sample_Textarea_JustHeight },
        template: `<Sample_Textarea_JustHeight>KEEP IT SIMPLE</Sample_Textarea_JustHeight>`
    }))
    .add('image-btn', () => ({
        components: { Sample_ImageBtn },
        template: `<Sample_ImageBtn>KEEP IT SIMPLE</Sample_ImageBtn>`
    }))

    //---- 1-10_matsuda
    .add('spot_modal', () => ({
        components: { Sample_SpotModal },
        template: `<Sample_SpotModal>KEEP IT SIMPLE</Sample_SpotModal>`
    }))
    .add('drag_drop_container', () => ({
        components: { Sample_DragDrop },
        template: `<Sample_DragDrop>KEEP IT SIMPLE</Sample_DragDrop>`
    }))

    //---- 1-10_sakai
    .add('gradation_btn', () => ({
        components: { Sample_GradationBtn },
        template: `<Sample_GradationBtn>KEEP IT SIMPLE</Sample_GradationBtn>`
    }))

    //---- 1-10_hagihara
    .add('progress_pagenation', () => ({
        components: { Sample_ProgressPagenation },
        template: `<Sample_ProgressPagenation>KEEP IT SIMPLE</Sample_ProgressPagenation>`
    }))
    .add('text_vertical-middle', () => ({
        components: { Sample_Text_Vertical_Middle },
        template: `<Sample_Text_Vertical_Middle>KEEP IT SIMPLE</Sample_Text_Vertical_Middle>`
    }))

    //---- 1-10_hirao
    .add('sliderbar', () => ({
        components: { Sample_Sliderbar },
        template: `<Sample_Sliderbar>KEEP IT SIMPLE</Sample_Sliderbar>`
    }))


//---------------------------------------------------------------------------------------
// 機能系コンポーネント ストーリー
//---------------------------------------------------------------------------------------
storiesOf('FUNCTION', module)
    //---- 1-10_nakamura
    .add('gmap', () => ({
        components: { Sample_Gmap },
        template: `<Sample_Gmap>KEEP IT SIMPLE</Sample_Gmap>`
    }))
    .add('add_balloon', () => ({
        components: { Sample_Add_Balloon },
        template: `<Sample_Add_Balloon>KEEP IT SIMPLE</Sample_Add_Balloon>`
    }))

    //---- 1-10_iizuka
    .add('text_truncate', () => ({
        components: { Sample_TextTruncate },
        template: `<Sample_TextTruncate>KEEP IT SIMPLE</Sample_TextTruncate>`
    }))
    .add('picture_book_ui', () => ({
        components: { Sample_PictureBook_Ui },
        template: `<Sample_PictureBook_Ui>KEEP IT SIMPLE</Sample_PictureBook_Ui>`
    }))

    //---- 1-10_matsuda
    .add('simple_audio_player', () => ({
        components: { Sample_SimpleAudioPlayer },
        template: `<Sample_SimpleAudioPlayer>KEEP IT SIMPLE</Sample_SimpleAudioPlayer>`
    }))
    .add('input_file_validate', () => ({
        components: { Sample_Input_FileValidate },
        template: `<Sample_Input_FileValidate>KEEP IT SIMPLE</Sample_Input_FileValidate>`
    }))
    .add('diff_checker', () => ({
        components: { Sample_DiffChecker },
        template: `<Sample_DiffChecker>KEEP IT SIMPLE</Sample_DiffChecker>`
    }))

//---------------------------------------------------------------------------------------
// 演出系コンポーネント ストーリー
//---------------------------------------------------------------------------------------
storiesOf('EFFECT', module)
    //---- 1-10_takatori
    .add('random-text', () => ({
        components: { Sample_RandomText },
        template: `<Sample_RandomText>KEEP IT SIMPLE</Sample_RandomText>`
    }))

    //---- 1-10_iizuka
    .add('fade-text', () => ({
        components: { Sample_FadeText },
        template: `<Sample_FadeText>KEEP IT SIMPLE</Sample_FadeText>`
    }))

    //---- 1-10_matsuda
    .add('svg-textstroke', () => ({
        components: { Sample_SvgTextStroke },
        template: `<Sample_SvgTextStroke>KEEP IT SIMPLE</Sample_SvgTextStroke>`
    }))
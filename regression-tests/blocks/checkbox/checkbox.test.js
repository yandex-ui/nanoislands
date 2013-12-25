module.exports = {
    'Checkbox': {
        tpl: 'checkbox.yate',
        args: {
            type: 'radio',
            text: 'Checkbox'
        }
    },

    'Checkbox checked': {
        tpl: 'checkbox.yate',
        args: {
            type: 'radio',
            text: 'Checkbox',
            checked: true
        }
    },

    'Checkbox hovered': {
        tpl: 'checkbox.yate',
        args: {
            type: 'radio',
            text: 'Checkbox',
            class: '_hover'
        }
    },

    'Checkbox pressed': {
        tpl: 'checkbox.yate',
        args: {
            type: 'radio',
            text: 'Checkbox',
            class: '_hover _active'
        }
    },

    'Checkbox disabled': {
        tpl: 'checkbox.yate',
        args: {
            type: 'radio',
            text: 'Checkbox',
            disabled: true
        }
    }
}

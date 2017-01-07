<template>
  <div class="md-button" :class="{ 'primary' : primary, 'accent' : accent, 'raised': raised, 'disabled' : disabled }" @click="onClick">
    <input type="submit" :value="value" :disabled="disabled">
    <link :class="{ 'rippleJS': !disabled }" />
  </div>
</template>

<script>
  import 'vanilla-ripplejs'
  export default {
    name: 'md-button',
    props: {
      value: {
        type: String,
        default: 'Button',
      },
      primary: {
        type: Boolean,
        default: false,
        required: false,
      },
      accent: {
        type: Boolean,
        default: false,
        required: false,
      },
      raised: {
        type: Boolean,
        default: false,
        required: false,
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false,
      }
    },
    methods: {
      onClick(event) {
        this.$emit('click', event);
      }
    }
  }
</script>

<style lang="sass">
  @import '../../assets/styles/modules/variables';
  .md-button {
    background: $default-button-background;
    color: $default-button-color;
    position: relative;
    cursor: pointer;
    border-radius: 2px;
    display: inline-block;
    min-width: 88px;
    min-height: 36px;
    margin: 6px 8px;
    padding: 0 16px;
    user-select: none;
    box-shadow: none;
    text-align: center;
    transition: all .2s ease-in-out;
    &:hover {
      background: $default-button-background-hover;
    }
    input {
      border: none;
      color: inherit;
      font-weight: 500;
      line-height: 36px;
      white-space: nowrap;
      font-size: 14px;
      text-transform: uppercase;
      background: transparent;
      letter-spacing: inherit;
      text-indent: 0px;
      text-shadow: none;
      font-family: $primary-font-family;
    }
    .rippleJS .ripple {
      background: #fff;
    }
  }
  
  .primary {
    color: $primary-button-background;
  }
  
  .accent {
    color: $accent-button-background;
  }
  
  .primary.raised {
    background: $primary-button-background;
    color: $primary-button-color;
    &:hover {
      background: $primary-button-background-hover;
    }
  }
  
  .accent.raised {
    background: $accent-button-background;
    color: $accent-button-color;
    &:hover {
      background: $accent-button-background-hover;
    }
  }
  
  .md-button.raised {
    box-shadow: 0 1px 5px rgba(0, 0, 0, .2), 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
  }
  
  .md-button.disabled {
    background: transparent;
    color: rgba(0, 0, 0, .26);
    &:hover {
      background: transparent;
    }
  }
  
  .md-button.raised.disabled {
    color: rgba(0, 0, 0, .26);
    background: rgba(0, 0, 0, .12);
    cursor: default;
    box-shadow: none;
    &:hover {
      background: rgba(0, 0, 0, .12);
    }
  }
</style>
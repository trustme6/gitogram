<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div class="x-wrapper">
    <xProgress />
    <div class="c-content">
      <div class="user">
        <div class="icon">
          <icon name="currentUser" />
        </div>
        <h2>
          Sam
        </h2>
      </div>
      <p><strong>The easiest way</strong> to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
      <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
      <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
      <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
    </div>
    <div class="b-container">
      <xButton />
    </div>
  </div>
</template>

<script>
import { xButton } from '../button'
import { xProgress } from '../progress'
import { icon } from '../../icons'
export default {
  name: 'SliderItem',
  components: {
    xButton,
    xProgress,
    icon

  }
}
</script>
<style lang="scss"  src="./sliderItem.scss"></style>

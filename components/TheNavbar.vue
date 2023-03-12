<template>
  <header>
    <div class="max-w-960px w-100 mx-auto">
      <div class="d-flex">
        <NuxtLink class="link text-center" :to="link.to" v-for="link in links" :key="link.name">
          <span class="font-weight-semibold text-uppercase text-sm">{{link.name}}</span>
        </NuxtLink>
      </div>

      
    </div>
  </header>
  <div class="d-flex align-items-center h-84 bg-primary-100">
    <div class="max-w-960px w-100 mx-auto d-flex align-items-center ">
      <div class="logo text-center">
        <NuxtLink to="/">
          <img src="~/assets/images/logo.png" alt="">
        </NuxtLink>
      </div>
      <b-form class="flex-grow-1 d-flex">
        <!-- //TODO: Only focus in PC devices -->
        <b-form-input
            class="h-50px w-100 max-w-527px bg-primary-200 me-2"
            placeholder="Shorten URL and get paid"
            autofocus
            required
            squared
          />

        <b-button variant="warning" squared type="submit" class="text-uppercase text-md font-weight-extrabold text-white h-57px w-139px">
          SHORTEN
        </b-button>
      </b-form>
      
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    name: 'Home',
    to:'/'
  },
  {
    name: 'benefits',
    to:'/a'
  },
]
</script>

<style scoped lang="scss">
  header{
    height: 3rem;
    background-color: $color-gray-800;
  }

  .link{
    @include box(8.875rem,3rem);
    color: $color-secondary-0;
    transition: 0.2s all;
    border-left: 1px solid $color-gray-700;
    
    span{
      line-height:3rem;
    }

    &:hover,&.router-link-active{
      background-color: $color-primary-100;
      color: $color-gray-0;
      text-shadow: 0 1px 1px $color-gray-700;
    }
  }

  .logo{
    @include box(8.875rem,3rem)
  }

  button{
    box-shadow: 1px 1px 0px inset #ffa18b;
    border: 1px  solid #ffa18b;
    transition: 0.5s all;

    &:hover{
      border: 1px  solid #ffa18b;
    }
  }

  input{
    transition: 0.5s all;
    box-shadow: 1px 2px 0px inset $color-primary-300;
    border: 1px  solid $color-primary-300;

    &:hover,&:focus{
      border: 1px  solid $color-primary-300;
    }
  }
  
</style>
<template>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
      <b-carousel-slide>
          <template #img>
            <img
                class="imgSlideCorwsel"
         
              src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/yeni-tucson/2023/tucson-bg-1860x720.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
             class="imgSlideCorwsel"
         
              src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/yeni-kona/Yeni-Kona-kv-header-1860x720.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
            class="imgSlideCorwsel"
           
              src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/yeni-elantra/yeni-elantra-hero-1860x720.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="imgSlideCorwsel"
          
              src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/yeni-i20/Hyundai-i20-1860x720.jpg"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

      </b-carousel>
  
      <b-form class="formReservation p-4" @submit.stop.prevent>
        <label class="mr-sm-2">Pick Location</label>
        <b-form-select v-model="pickLocationValue" :options="pickLocation" size="sm" class="mt-1"></b-form-select>
        <label class="mr-sm-2">Return Location</label>
        <b-form-select v-model="returnLocationValue" :options="returnLocation" size="sm" class="mt-1"></b-form-select>
        <label for="example-datepicker">Choose a pick date</label>
        <div class="timeClass">
             <b-form-datepicker v-model="pickDate" class="mr-2"></b-form-datepicker>    
             <b-form-timepicker v-model="pickTime" locale="en"></b-form-timepicker>
        </div>
        <label class="mt-3" for="example-datepicker">Choose a return date</label>
        <div class="timeClass">
             <b-form-datepicker v-model="returnDate" class="mr-2"></b-form-datepicker>    
             <b-form-timepicker v-model="returnTime" locale="en"></b-form-timepicker>
        </div>
        <b-button class="mt-2" @click="gotoRent()" block variant="outline-dark">Search</b-button>
        </b-form>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
   
          sliding: null,
          pickLocation:['İstanbul','Ankara','izmir'],
          pickLocationValue:'İstanbul',
          returnLocation:['İstanbul','Ankara','izmir'],
          returnLocationValue:'İstanbul',
          pickDate:'',
          pickTime:'',
          returnDate:'',
          returnTime:'',
          userSelect:[]
        }
      },
      methods: {
        onSlideStart() {
          this.sliding = true
        },
        onSlideEnd() {
          this.sliding = false
        },
        gotoRent(){
        this.userSelect.push(this.pickLocationValue,this.returnLocationValue,this.pickDate,this.pickTime,this.returnDate,this.returnTime);
        const userSelect=this.userSelect;
        this.$router.push({name :'rent',params:{userData:userSelect}} )
        
      }
      },
    }
  </script>



<style>
    .imgSlideCorwsel{
        width: 100%;
        height: 700px;
    }
.formReservation{
        position: absolute;
     
        min-height: 420px;
        background-color: rgba(218, 218, 218, 0.753);
        padding: 15;
        margin-top: -600px;
        margin-left: 140px;
        z-index: 999;
}

.timeClass{
    display: flex;
    flex-direction: row;
}

</style>
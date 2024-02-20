<template>
    <div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://www.renault.com.tr/agg/vn/unique/ONE_DACIA_PP_LARGE_DENSITY1/r_brandSite_carPicker_1.png?uri=https%3A%2F%2Ftr.co.rplug.renault.com%2Fproduct%2Fmodel%2FCL5%2Fyeni-clio%2Fc%2FA-ENS_0MDL2P1SERIELIM4_-TEKQJ" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="item[0]">
          <b-card-text>
                {{ item[1] }}
          </b-card-text>
          <div class="priceBuket">
            <b-card-text class="priceText">
                ${{ item[2] }}
          </b-card-text>
          <b-icon icon="bucket" variant="success"></b-icon>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>

<script>
export default{
    props:{
        item:Array
    }
}
</script>

<style>
    .priceText{
       font-weight: bold;
       font-size: 18px; 
    }
    .priceBuket{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
</style>
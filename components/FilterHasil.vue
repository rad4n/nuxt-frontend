.container-checkbox{

}
<template>
  <div class="col-md-4">
    <h4>Filter</h4>
    <h6>
      <span class="badge badge-secondary">Campur</span>
      <span class="badge badge-secondary">Putra</span>
      <span class="badge badge-secondary">Putri</span>
    </h6>
    <hr/>
    <h5>Select Facilities</h5>
    <div class="row">
        <div class="col-md-6 form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
            Air Conditioning
          </label>
        </div>
        <div class="col-md-6 form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
            Free Wifi
          </label>
        </div>
        <div class="col-md-6 form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
            Water Heater
          </label>
        </div>
        <div class="col-md-6 form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
            Bed Size
          </label>
        </div>
      </div>
      <hr/>
      <h5>Price Range</h5>
      <div data-role="rangeslider">
        <label for="price-min">Price:</label>
      </div>
  </div>
</template>
<script>

</script>
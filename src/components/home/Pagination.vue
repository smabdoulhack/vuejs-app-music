<template>
  <div>
    <ul>
      <li>Prev</li>
      <li class="active">1</li>
      <li>2</li>
      <li>3</li>
      <li>Next</li>
    </ul>
  </div>
</template>
<script>
</script>

<style scoped>
ul {
  padding-left: 0;
  
}

ul > li {
  min-width: 50px;
  margin: 5px;
  padding: 5px;
  display: inline-block;
  border: 1px solid lightskyblue;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
}

ul > li.active{
  color: #fff;
  background-color: blue;
}

ul > li:hover{
  color: #fff;
  background-color: blue;
}

ul li:first-child, ul  li:last-child {
background-color: rgba(128, 128, 128, 0.445);
}

</style>
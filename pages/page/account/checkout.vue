<template>
<Header/>
  <div>
    <WidgetsBreadcrumbs title="Оформить заказ" />
   <PaymentPage/>
  </div>
  <Footer />
</template>
<script>
export default{

}

useHead({
  titleTemplate: `%s - Оформить заказ`,
  meta: [
    {
      name: 'description',
      content: 'Evacode - интернет магазин корейской косметики - Оформить заказ'
    },
  ]
});

</script>

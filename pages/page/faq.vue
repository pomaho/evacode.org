<template>
 <Header/>
  <div>
    <WidgetsBreadcrumbs title="Доставка" />
    <section class="faq-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="accordion theme-accordion" id="accordionExample">
              <div class="card" v-for="(item, index) in items" :key="index">
                <div class="card-header" :id="`headingOne${index}`">
                  <h5 class="mb-0">
                    <button class="btn btn-link" type="button" data-bs-toggle="collapse"
                                           :data-bs-target="`#collapseOne${index}`" :aria-expanded="index === 0"
                                           :aria-controls="`collapseOne${index}`">
                      {{ item.question }}
                    </button>
                  </h5>
                </div>
                <div :id="`collapseOne${index}`" :class="{
                  collapse: true,
                  show: index === 0,
                }" :aria-labelledby="`headingOne${index}`"
                     data-bs-parent="#accordionExample">
                  <div class="card-body">
                    <p>{{ item.answer }}</p>
                  </div>
                </div>
              </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>
<script>

export default {
  data() {
    return {
      items: [
        {
          question: 'How can I downgrade to an earlier version of Dummy Content?',
          answer: 'it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words. combined with a handful of model sentence structures'
        },
        {
          question: 'How can I upgrade from version?',
          answer: 'it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words. combined with a handful of model sentence structures'
        },
        {
          question: 'Under what license are Regular Labs extensions released?',
          answer: 'it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words. combined with a handful of model sentence structures'
        },
        {
          question: 'Can I turn on/off some blocks on the page?',
          answer: 'it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words. combined with a handful of model sentence structures'
        },
        {
          question: 'What is included in the theme package?',
          answer: 'it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words. combined with a handful of model sentence structures'
        },
        {
          question: 'how to install and run project?',
          answer: 'it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words. combined with a handful of model sentence structures'
        }
      ]
    }
  }
}
</script>

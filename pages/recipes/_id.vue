<template>
  <PageRecipesId v-bind="{recipesByCategory, recipe}" />
</template>

<script>
import { findOneRecipeByUuid, findAllRecipesByCategoryName } from '~/services/contentService'
import PageRecipesId from '~/components/PageRecipesId'
export default {
  transition: 'page',
  components: { PageRecipesId },
  async asyncData ({ params }) {
    const recipe = await findOneRecipeByUuid(params.id)
    const recipesByCategory = await findAllRecipesByCategoryName(recipe.category.name, 4)
    return { recipe, recipesByCategory }
  }
}
</script>

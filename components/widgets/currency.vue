<template>
    <MazDropdown
        :items="currencies"
        trigger="click"
    >
        {{ currentCurrency.value }}
    </MazDropdown>
</template>
<script setup>
import {useCurrenciesStore} from '~/store/currencies';
import {useProductStore} from '~/store/products';

let currencies = await useCurrenciesStore().currencies;
currencies = currencies.map((currency) => ({
    label: currency.value,
    action: () => useProductStore().setCurrency(currency),
}));

const currentCurrency = ref(useProductStore().changeCurrency);

</script>

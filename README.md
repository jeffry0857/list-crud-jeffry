# list_crud_jeffry

<!-- Comment：雖然是個簡單的 TodoList，拆分成 Top、List、Item、Bottom 四個部分
              用意是讓每個區塊都模組化，便於日後在維護或更換 / 更新上可以更為快速
              且不會影響到其他組件。其中，資料的部分是以Fake API串接，再由v-for
              迭代出來渲染於畫面上。在Bottom這個組件；我將其歸類為計算的區塊，計
              算目前的代辦事項總數和已完成事項總數，並且將完成數/總數連棟至進度百
              分比條的style上，這個progress bar就會以動態的方式來呈現。

              CSS部分：於main.css設置全域的style，並於main.scss將d-flex和align-center
              打包成@alignCenter 以大幅減少重複輸入


              下列為不懂字面的意思故沒有做出來
              5. 製作 輸入類型 text, radio, select 、同一component切換prop來改變對應的輸入類型，並可套用v-model
-->

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

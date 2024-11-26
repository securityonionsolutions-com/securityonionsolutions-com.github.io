<template>
  <Carousel v-bind="config" @init="handleSlideStart" @slide-start="handleSlideStart" :style="'background-image: url(img/graphics/digital_space.png)'" class="logobg" height="400px">
    <Slide v-for="item in entries" :key="item">
      <div id="summary" class="logobg flex flex-col w-full md:w-1/2 h-full items-center justify-center py-10 px-2 xs:px-8" :style="'background-image: url(' + item.background_left + ')'">
        <header class="text-3xl xl:text-4xl font-bold text-center pb-4" v-text="item.title"/>
        <div class="text-lg xl:text-2xl" v-html="item.subtitle"/>
      </div>
      <div id="content" class="logobg hidden md:block md:flex md:flex-col md:w-1/2 h-full py-4" :style="'background-image: url(' + item.background_right + ')'">
        <div v-if="item.text" class="italic text-2xl mt-4 mb-4" v-text="item.text"/>
        <div v-if="item.list" class="my-auto pr-4 w-full grid grid-rows-4 grid-cols-4 gap-1">
          <div v-for="(list_item, idx) in item.list" :key="idx" class="bg-blue-100 rounded-md py-3 whitespace-nowrap" :class="idx == highlight_idx ? 'list_fader' : ''" v-text="list_item"/>
        </div>
        <div v-if="item.metrics" class="my-auto">
          <div v-for="(value, key, idx) in item.metrics" class="flex flex-row my-2 text-xl bg-blue-100 rounded-lg mx-12 py-1">
            <div class="px-2 text-right basis-2/3" v-text="key + ':'"/>
            <div class="px-2 font-mono font-bold text-left basis-1/3" :key="growCycles" v-text="formatMetric(idx, value)"/>
          </div>
        </div>
        <div v-if="item.bars" class="my-auto">
          <div v-for="(value, key, idx) in item.bars" class="flex flex-row text-md mx-12">
            <div class="px-2 text-right basis-1/2" v-text="key"/>
            <div class="px-2 text-left basis-1/2">
              <div :key="growCycles" class="bg-blue-400" :style="'height: 20px; width: ' + getGrowValue(idx, value) + 'px'"/>
            </div>
          </div>
        </div>
        <div v-if="item.quotes" class="mx-6 mt-16 h-full">
          <div class="my-auto mx-6">
            <client-only>
              <div v-for="(feedback, idx) in item.quotes" class="quote_fader m-2 p-3 w-full rounded-lg bg-blue-100" :class="idx == highlight_idx ? 'block' : 'hidden'">
                <div class="text-lg text-left" v-text="feedback.text"/>
                <div class="text-sm text-right">
                  -{{ feedback.source }}
                </div>
              </div>
            </client-only>
          </div>
          <so-button class="whitespace-nowrap absolute w-full bottom-24 ml-48" @click.native="sos.showContactModal({ mode: 'feedback', source: 'main_quote_carousel' })">
            <div class="text-lg my-1">
              Send Feedback
            </div>
          </so-button>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { sos } from '~/lib/sos.js'
import { defineProps } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import SoButton from '~/components/SoButton'

const growCycles = ref(0);
var entry;
const highlight_idx = ref(-1);
var timer;
var entryCount = 0;
var grows = false;
function handleSlideStart(args) {
  var slidingToIndex = 0;
  if (args && args.slidingToIndex != undefined) {
    slidingToIndex = args.slidingToIndex;
  }
  if (timer) {
    clearInterval(timer);
  }
  highlight_idx.value = -1;
  growCycles.value = 0;
  var entry_idx = slidingToIndex % props.entries.length;
  if (entry_idx < 0) {
    entry_idx = props.entries.length - 1;
  }
  entry = props.entries[entry_idx];
  if (entry.list) {
    entryCount = entry.list.length;
    grows = false;
  } else if (entry.quotes) {
    entryCount = entry.quotes.length;
    grows = false;
  } else if (entry.metrics) {
    entryCount = Object.keys(entry.metrics).length;
    grows = true;
  } else if (entry.bars) {
    entryCount = Object.keys(entry.bars).length;
    grows = true;
  }
  setTimeout(resetAnimation, config.animateDelay);
}

function resetAnimation() {
  if (timer) {
    clearInterval(timer);
  }
  if (entryCount <= 0) {
    return;
  }
  if (grows) {
    timer = setInterval(grow, config.growCycleTime / config.growCycleCount)
  } else {
    resetHighlight();
  }
}

function resetHighlight() {
  timer = setInterval(advanceHighlight, entry.highlight_interval);
  advanceHighlight();
}

function advanceHighlight() {
  highlight_idx.value = highlight_idx.value + 1;
  if (highlight_idx.value >= entryCount) {
    if (entry.loop) {
      highlight_idx.value = 0;
    }
  }
}

function grow() {
  if (growCycles.value >= config.growCycleCount) {
    growCycles.value = 0;
    highlight_idx.value += 1;
    if (highlight_idx.value >= entryCount) {
      clearInterval(timer);
    }
  } else {
    growCycles.value += 1;
  }
}

function formatMetric(idx, max_value) {
  var value = getGrowValue(idx, max_value);
  if (value == 0) {
    return "...";
  } else if (value == max_value) {
    return value.toLocaleString() + "+";
  } else {
    return value.toLocaleString();
  }
}

function getGrowValue(idx, max_value) {
  if (highlight_idx.value < idx) {
    // Haven't gotten to this metric yet
    return 0;
  }
  if (highlight_idx.value > idx) {
    // Already grew this metric
    return max_value;
  }
  if (growCycles.value == 0) {
    return 0;
  }
  if (growCycles.value >= config.growCycleCount) {
    return max_value;
  }
  var ratio = growCycles.value / config.growCycleCount;
  return max_value * ratio;
}

const components = {
  SoButton
};

const config = {
  autoplay: 17000,
  animateDelay: 1000,
  growCycleTime: 500,
  growCycleCount: 20,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};

const props = defineProps({
  entries: Array,
})

</script>

<style>
.logobg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
#summary {
  background-size: 50%;
}
.quote_fader {
    opacity: 1;
    animation: quote_fade 3s linear;
}
@keyframes quote_fade {
  0% { opacity: 0 }
  20%,100% { opacity: 1 }
}
.list_fader {
    background-color: rgb(147 197 253);
    color: white;
    animation: list_fade 2.5s linear;
}
@keyframes list_fade {
  0% { background-color: rgb(219 234 254); color: black }
  20%,100% { background-color: rgb(147 197 253); color: black }
}
</style>
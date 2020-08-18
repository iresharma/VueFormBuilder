<template>
  <div>
    <div class="center examplex">
      <div class="center grid">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
            <div class="elements">
              <h4 style="color: whitesmoke">Elements</h4>
              <draggable
                    class="dragArea coulmns "
                    :list="elements"
                    :group="{ name: 'element', pull: 'clone', put: false }"
                  >
                    <div class="element column is-half" v-for="ele in elements" :key="ele.label">
                      <span class="ion" v-html="ele.icon"></span>
                      <br />
                      <span style="color: grey">{{ ele.type }}</span>
                    </div>
                </draggable>
            </div>
          </vs-col>
          <vs-col w="8">
            <div class="row">
              <div style="display: flex; flex-direction: row;">
                <h4 style="color: whitesmoke" @click="Switch(0)" class="active" id="Form">Form</h4>
                <h4 style="color: whitesmoke" @click="Switch(1)" id="Preview">Preview</h4>
				<h4 style="color: whitesmoke" @click="Switch(2)" id="Output">Output</h4>
              </div>
              <div>
                <vs-button border primary @click="form.push([])">
                  <ion-icon class="icon" name="add-outline"></ion-icon>&nbsp;
                  Add Row
                </vs-button>
              </div>
            </div>
            <div class="dash">
              <div v-if="activeTab === 0">
                <v-row style="height: 8vw; padding: 5px;" v-for="(row, index) in form" :key="index">
                  <div style="width: 100%; border-bottom: 1px solid green; border-top: 1px solid green;">
                    <draggable
                      class="activeArea roww"
                      style="width: 100%"
                      :list="row"
                      :group="'element'"
                    >
                      <vs-col
                      :size="element.size"
                        class="element"
                        v-for="(element, ind) in row"
                        :key="element.row"
                      >
                        <div class="top">
                          <span>{{ element.type }}</span>
                          <span>
                            <ion-icon name="create-outline" @click="active = !active"></ion-icon>
                            <ion-icon style="color: red" @click="form[index].splice(ind, 1)" name="close-outline"></ion-icon>
                          </span>
                        </div>
                        <div class="label">
                          {{ element.label }}
                        </div>
                      </vs-col>
                    </draggable>
                  </div>
                </v-row>
              </div>
              <div v-if="activeTab === 1">Hello</div>
            <div v-if="activeTab === 2" style="text-align: left">
              <json-viewer :value="form" :expand-depth=5 theme="jv-light"></json-viewer>
            </div>
            </div>
              <div style="display: flex; justify-content: flex-end">
                <vs-button danger border>Reset</vs-button>
                <vs-button success flat>Save</vs-button>
              </div>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
            <h4 style="color: white">Form JSON <ion-icon name="create-outline" @click="active = !active"></ion-icon></h4>
            <json-viewer style="text-align: left" :value="form" :expand-depth=3 theme="jv-light"></json-viewer>
          </vs-col>
        </vs-row>
      </div>
    </div>
    <vs-dialog v-model="active">
        <template #header>
          <h4 class="not-margin">
            Welcome to <b>Vuesax</b>
          </h4>
        </template>

        <template #footer>
          <div class="footer-dialog">
            <vs-button block>
              Sign In
            </vs-button>

            <div class="new">
              New Here? <a href="#">Create New Account</a>
            </div>
          </div>
        </template>
      </vs-dialog>
  </div>
</template>


<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0;
}
.active {
  border-bottom: 2px solid green;
}
.row div h4 {
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 0.5em;
  margin-top: 2.16em;
}
.dash {
  border: 2px grey dashed;
  height: 75vh;
  margin: 5px;
}
.grid {
  margin-top: 50px;
}
.element {
  background-color: rgb(48, 48, 48);
  margin: 3px;
  height: 7vw;
}
.element .ion {
  color: white;
  font-size: 35px;
  font-weight: 100;
}
.icon {
  font-size: 18px;
  margin-right: 5px;
  color: inherit;
}
.elements {
  height: 90vh;
  overflow: scroll;
}
.top {
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 5px;
}
.top ion-icon {
  font-size: 1.3em;
}
.roww {
  display: flex;
  flex-direction: row;
}
</style>

<script>
import draggable from "vuedraggable";
export default {
  name: "Builder",
  data() {
    return {
      active: false,
      activeTab: 0,
      elements: [
    {
      type: "Text",
      size: 0,
      icon: '<ion-icon name="mail-outline"></ion-icon>'
    },
    {
      type: "Email",
      size: 0,
      icon: '<ion-icon name="at-outline"></ion-icon>'
    },
    {
      type: "Password",
      size: 0,
      icon: '<ion-icon name="lock-closed-outline"></ion-icon>'
    },
    {
      type: "Number",
      size: 0,
      icon: '<ion-icon name="bar-chart-outline"></ion-icon>'
    },
    {
      type: "Url",
      size: 0,
      icon: '<ion-icon name="globe-outline"></ion-icon>'
    },
    {
      type: "File",
      size: 0,
      icon: '<ion-icon name="newspaper-outline"></ion-icon>'
    },
    {
      type: "Date Picker",
      size: 0,
      icon: '<ion-icon name="calendar-outline"></ion-icon>'
    },
    {
      type: "Time Picker",
      size: 0,
      icon: '<ion-icon name="time-outline"></ion-icon>'
    },
    {
      type: "Switch",
      size: 0,
      icon: '<ion-icon name="toggle-outline"></ion-icon>'
    },
    {
      type: "Checkbox",
      size: 0,
      icon: '<ion-icon name="checkbox-outline"></ion-icon>'
    },
    {
      type: "Options",
      size: 0,
      icon: '<ion-icon name="checkbox-outline"></ion-icon>'
    },
    {
      type: "Radio",
      size: 0,
      icon: '<ion-icon name="checkbox-outline"></ion-icon>'
    },
],
      form: [],
    };
  },
  components: {
    draggable,
  },
  methods: {
    Switch(ind) {
      if (ind === 1) {
        this.activeTab = 1;
        this.$el.querySelector("#Preview").classList.add("active");
		this.$el.querySelector("#Form").classList.remove("active");
		this.$el.querySelector("#Output").classList.remove("active");
      } else if(ind === 0) {
        this.activeTab = 0;
        this.$el.querySelector("#Form").classList.add("active");
		this.$el.querySelector("#Preview").classList.remove("active");
		this.$el.querySelector("#Output").classList.remove("active");
      } else {
        this.activeTab = 2;
        this.$el.querySelector("#Output").classList.add("active");
		this.$el.querySelector("#Preview").classList.remove("active");
		this.$el.querySelector("#Form").classList.remove("active");
	}
    },
  },
};
</script>

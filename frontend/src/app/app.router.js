"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./components/about/about.component");
var tasks_component_1 = require("./components/tasks/tasks.component");
var home_component_1 = require("./components/home/home.component");
var router = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'tasks', component: tasks_component_1.TasksComponent }
];
exports.routes = router_1.RouterModule.forRoot(router, { enableTracing: true });
//# sourceMappingURL=app.router.js.map
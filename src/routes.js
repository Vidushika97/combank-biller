import DashboardView from './views/DashboardView.vue'
import DashboardHeader from './components/DashboardHeader.vue'
import FormHelperTopDisplay from './components/FormHelperTopDisplay.vue'
import StaticDetailsTable from './components/StaticDetailsTable.vue'
import DoughnutChart from './components/DoughnutChart.vue'

export default[
    {path:'/',component:DashboardView},
    {path:'/header',component:DashboardHeader},
    {path:'/top',component:FormHelperTopDisplay},
    {path:'/static',component:StaticDetailsTable},
    {path:'/chart',component:DoughnutChart},
  ]
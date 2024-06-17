import { rotas } from './StackRoutes'
import { RootTabParamsList } from './TabsRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends rotas {}
    interface RootParamList extends RootTabParamsList {}
  }
}
export const ADMIN_SIDEBAR_MENU = [
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
    ]
  }
];

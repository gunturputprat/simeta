import { Routes, RouterModule }  from '@angular/router';
import { Mahasiswa } from './mahasiswa.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'mahasiswa',
    component: Mahasiswa,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'pengajuan', loadChildren: () => System.import('./pengajuan/pengajuan.module') },
      { path: 'log', loadChildren: () => System.import('./log/log.module') },
      { path: 'kolokium', loadChildren: () => System.import('./kolokium/kolokium.module') },
      { path: 'praseminar', loadChildren: () => System.import('./praseminar/praseminar.module') },
      { path: 'sidang', loadChildren: () => System.import('./sidang/sidang.module') },
      { path: 'skl', loadChildren: () => System.import('./skl/skl.module') },
      { path: 'profile', loadChildren: () => System.import('./profile/profile.module') },
      { path: 'seminar/mandiri', loadChildren: () => System.import('./mandiri/mandiri.module') },
      { path: 'seminar/micon', loadChildren: () => System.import('./micon/micon.module') },
      { path: 'seminar/nasional', loadChildren: () => System.import('./nasional/nasional.module') },
    ]
  }
];

export const routing = RouterModule.forChild(routes);

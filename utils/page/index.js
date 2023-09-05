
export const TasksPage 									= 							new PageMeta('Tasks', 															'/dashboard/tasks', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TasksPageWithTitle 						= title => 					new PageMeta(title || 'Tasks', 													'/dashboard/tasks', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TaskPage 									= 							new PageMeta('Task Details', 													'/dashboard/tasks/task', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TaskPageWithTitle 							= title => 					new PageMeta(title || 'Task Details', 											'/dashboard/tasks/task', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TasksEditPage 								= (editing = false) => 		new PageMeta((editing && 'Edit Task Details') || 'Create New Task', 			'/dashboard/tasks/edit', (editing && faTasks) || faPlus)

export const SignoffsPage 								= 							new PageMeta('Sign-offs', 														'/dashboard/signoffs', faUserCheck)
export const SignoffsPageWithTitle 						= title	=>					new PageMeta(title || 'Sign-offs', 												'/dashboard/signoffs', faUserCheck)











export const LoMePage 								=(title=" Me") 						=>	new PageMeta(title || "Lo ", 															'/lo/me', faBell)


export const HellAdjfAdfPage 								=							new PageMeta(" Adf"||" Adjf "||"Hell ")


export const HellAljfAdfjlPage 								=							new PageMeta(' Adfjl'||' Aljf '||'Hell ')


export const OnePage 								=							new PageMeta('One')

export const QwerPage 								=							new PageMeta('Qwer', '/qwer' , faBell)

export const HellNoPage 								=							new PageMeta(' No'||'Hell ', '/hell/no' , faBell)


export const HellYesPage 								=							new PageMeta(' Yes'||'Hell ', '/hell/yes' , faBell)


export const AccLogsPage 								=							new PageMeta(' Logs'||'Acc ', '/acc/logs' , faBell)


export const AccPage 								=							new PageMeta('Acc', '/acc' , faBell)


export const AccLogsEditPage 								=							new PageMeta(' Edit'||' Logs '||'Acc ', '/acc/logs/edit' , faBell)


export const HellNoPage 								=							new PageMeta(' No'||'Hell ', '/hell/no' , faBell)


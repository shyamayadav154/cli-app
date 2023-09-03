
export const TasksPage 									= 							new PageMeta('Tasks', 															'/dashboard/tasks', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TasksPageWithTitle 						= title => 					new PageMeta(title || 'Tasks', 													'/dashboard/tasks', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TaskPage 									= 							new PageMeta('Task Details', 													'/dashboard/tasks/task', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TaskPageWithTitle 							= title => 					new PageMeta(title || 'Task Details', 											'/dashboard/tasks/task', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TasksEditPage 								= (editing = false) => 		new PageMeta((editing && 'Edit Task Details') || 'Create New Task', 			'/dashboard/tasks/edit', (editing && faTasks) || faPlus)

export const SignoffsPage 								= 							new PageMeta('Sign-offs', 														'/dashboard/signoffs', faUserCheck)
export const SignoffsPageWithTitle 						= title	=>					new PageMeta(title || 'Sign-offs', 												'/dashboard/signoffs', faUserCheck)



export const TasksPage 									= 							new PageMeta('Tasks', 															'/dashboard/tasks', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TasksPageWithTitle 						= title => 					new PageMeta(title || 'Tasks', 													'/dashboard/tasks', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TaskPage 									= 							new PageMeta('Task Details', 													'/dashboard/tasks/task', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TaskPageWithTitle 							= title => 					new PageMeta(title || 'Task Details', 											'/dashboard/tasks/task', faTasks, null, { cypRead: CYP_ACCESS_PRIVILEGES.TASKS })
export const TasksEditPage 								= (editing = false) => 		new PageMeta((editing && 'Edit Task Details') || 'Create New Task', 			'/dashboard/tasks/edit', (editing && faTasks) || faPlus)

export const SignoffsPage 								= 							new PageMeta('Sign-offs', 														'/dashboard/signoffs', faUserCheck)
export const SignoffsPageWithTitle 						= title	=>					new PageMeta(title || 'Sign-offs', 												'/dashboard/signoffs', faUserCheck)











export const Hell/NoPage 								= 							new PageMeta('Hell/No', 															'undefined', faBell)


export const YesPage 								= 							new PageMeta('Yes', 															'hell', faBell)


export const BaPage 								= 							new PageMeta('Ba', 															'yo/ba', faBell)


export const WayPage 								= 							new PageMeta('Way', 															'/no/way', faBell)


export const BlaPage 								= 							new PageMeta('Bla', 															'/bla', faBell)


export const HellPage 								= 							new PageMeta('Hell', 															'/what/hell', faBell)


export const BoyPage 								= 							new PageMeta('Boy', 															'/yo/boy', faBell)


export const BlahPage 								= 							new PageMeta('Blah', 															'/blah', faBell)


export const AldjfPage 								= 							new PageMeta('Aldjf', 															'/aldjf', faBell)


export const BroPage 								= 							new PageMeta('Bro', 															'/yo/bro', faBell)


export const TherePage 								= 							new PageMeta('There', 															'/write/there', faBell)


export const HellPage 								= 							new PageMeta('Hell', 															'/bro/hell', faBell)


export const IsPage 								= 							new PageMeta('Is', 															'/what/is/this', faBell)


export const WellPage 								= 							new PageMeta('Well', 															'/hell/well/tell', faBell)


export const LaPage 								= 							new PageMeta('La', 															'/ro/la', faBell)


export const TherePage 								= 							new PageMeta('There', 															'/hi/there', faBell)


export const TherePage 								= 							new PageMeta('There', 															'/yo/there', faBell)


export const WellPage 								= 							new PageMeta('Well', 															'/hell/well', faBell)


export const BoyPage 								= 							new PageMeta('Boy', 															'/yo/boy/hell', faBell)


export const AjdPage 								= 							new PageMeta('Ajd', 															'/rith/ajd/dfald/adfj', faBell)


export const TellPage 								= 							new PageMeta('Tell', 															'/hell/tell/well', faBell)


export const AlPage 								= 							new PageMeta('Al', 															'/hel/al/al', faBell)


export const BroPage 								= 							new PageMeta('Bro', 															'/yo/bro/hell.js', faBell)


export const BroPage 								= 							new PageMeta('Bro', 															'/yo/bro/no', faBell)


export const LogsPage 								= 							new PageMeta('Logs', 															'/accounts/logs', faBell)


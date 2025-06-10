import { sequelize } from './connection.js';

import {
    School, UserAccount, UserProfile, Source, Status, Lead, Client, Student,
    StudentClient, Subscription, StudentSubscription, SubscriptionPause, Group, LeadGroup,
    ClientGroup, StudentGroup, DanceStyle, Schedule, Lesson,
    Attendance, Payment, LessonPayment, FinancialReport,
    LessonSubscription, TeacherRatePolicy, TeacherRate, TeacherRateRule,
} from './models/index.js';

// --- School ---
School.hasMany(UserAccount, { foreignKey: 'school_id', onDelete: 'CASCADE' });
UserAccount.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(Status, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Status.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });



School.hasMany(Lead, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Lead.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(Client, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Client.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(Student, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Student.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(StudentClient, { foreignKey: 'school_id', onDelete: 'CASCADE' });
StudentClient.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(Subscription, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Subscription.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(StudentSubscription, { foreignKey: 'school_id', onDelete: 'CASCADE' });
StudentSubscription.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(SubscriptionPause, { foreignKey: 'school_id', onDelete: 'CASCADE' });
SubscriptionPause.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(Group, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Group.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(LeadGroup, { foreignKey: 'school_id', onDelete: 'CASCADE' });
LeadGroup.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(ClientGroup, { foreignKey: 'school_id', onDelete: 'CASCADE' });
ClientGroup.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(StudentGroup, { foreignKey: 'school_id', onDelete: 'CASCADE' });
StudentGroup.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(DanceStyle, { foreignKey: 'school_id', onDelete: 'CASCADE' });
DanceStyle.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(Schedule, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Schedule.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(Lesson, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Lesson.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(Attendance, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Attendance.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(Payment, { foreignKey: 'school_id', onDelete: 'CASCADE' });
Payment.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(LessonPayment, { foreignKey: 'school_id', onDelete: 'CASCADE' });
LessonPayment.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(FinancialReport, { foreignKey: 'school_id', onDelete: 'CASCADE' });
FinancialReport.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(LessonSubscription, { foreignKey: 'school_id', onDelete: 'CASCADE' });
LessonSubscription.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(TeacherRatePolicy, { foreignKey: 'school_id', onDelete: 'CASCADE' });
TeacherRatePolicy.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(TeacherRate, { foreignKey: 'school_id', onDelete: 'CASCADE' });
TeacherRate.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

School.hasMany(TeacherRateRule, { foreignKey: 'school_id', onDelete: 'CASCADE' });
TeacherRateRule.belongsTo(School, { foreignKey: 'school_id', onDelete: 'CASCADE' });

// --- UserAccount ---
UserAccount.hasOne(UserProfile, { foreignKey: 'account_id', onDelete: 'CASCADE' });
UserProfile.belongsTo(UserAccount, { foreignKey: 'account_id', onDelete: 'CASCADE' });

UserAccount.hasMany(Lead, { foreignKey: 'created_by', onDelete: 'SET NULL' });
Lead.belongsTo(UserAccount, { foreignKey: 'created_by', onDelete: 'SET NULL' });

UserAccount.hasMany(Lesson, { foreignKey: 'teacher_id', onDelete: 'SET NULL' });
Lesson.belongsTo(UserAccount, { foreignKey: 'teacher_id', onDelete: 'SET NULL' });

UserAccount.hasMany(Attendance, { foreignKey: 'marked_by', onDelete: 'SET NULL' });
Attendance.belongsTo(UserAccount, { foreignKey: 'marked_by', onDelete: 'SET NULL' });

UserAccount.hasMany(Payment, { foreignKey: 'created_by', onDelete: 'SET NULL' });
Payment.belongsTo(UserAccount, { foreignKey: 'created_by', onDelete: 'SET NULL' });

UserAccount.hasMany(TeacherRate, { foreignKey: 'teacher_id', onDelete: 'CASCADE' });
TeacherRate.belongsTo(UserAccount, { foreignKey: 'teacher_id', onDelete: 'CASCADE' });

// --- Source ---
Source.hasMany(Lead, { foreignKey: 'source_id', onDelete: 'SET NULL' });
Lead.belongsTo(Source, { foreignKey: 'source_id', onDelete: 'SET NULL' });

// --- Status ---
Status.hasMany(Lead, { foreignKey: 'status_id', onDelete: 'SET NULL' });
Lead.belongsTo(Status, { foreignKey: 'status_id', onDelete: 'SET NULL' });

// --- Many-to-Many через промежуточные таблицы ---

// Lead <-> Group через LeadGroup
Lead.belongsToMany(Group, { through: LeadGroup, foreignKey: 'lead_id', otherKey: 'group_id', onDelete: 'CASCADE' });
Group.belongsToMany(Lead, { through: LeadGroup, foreignKey: 'group_id', otherKey: 'lead_id', onDelete: 'CASCADE' });

// Client <-> Group через ClientGroup
Client.belongsToMany(Group, { through: ClientGroup, foreignKey: 'client_id', otherKey: 'group_id', onDelete: 'CASCADE' });
Group.belongsToMany(Client, { through: ClientGroup, foreignKey: 'group_id', otherKey: 'client_id', onDelete: 'CASCADE' });

// Student <-> Group через StudentGroup
Student.belongsToMany(Group, { through: StudentGroup, foreignKey: 'student_id', otherKey: 'group_id', onDelete: 'CASCADE' });
Group.belongsToMany(Student, { through: StudentGroup, foreignKey: 'group_id', otherKey: 'student_id', onDelete: 'CASCADE' });

// Student <-> Client через StudentClient
Student.belongsToMany(Client, { through: StudentClient, foreignKey: 'student_id', otherKey: 'client_id', onDelete: 'CASCADE' });
Client.belongsToMany(Student, { through: StudentClient, foreignKey: 'client_id', otherKey: 'student_id', onDelete: 'CASCADE' });

// Student <-> Subscription через StudentSubscription
Student.belongsToMany(Subscription, { through: StudentSubscription, foreignKey: 'student_id', onDelete: 'CASCADE' });
Subscription.belongsToMany(Student, { through: StudentSubscription, foreignKey: 'subscription_id', onDelete: 'CASCADE' });

// --- StudentSubscription & SubscriptionPause ---
StudentSubscription.hasMany(SubscriptionPause, { foreignKey: 'student_subscription_id', onDelete: 'CASCADE' });
SubscriptionPause.belongsTo(StudentSubscription, { foreignKey: 'student_subscription_id', onDelete: 'CASCADE' });

// --- Group & Schedule ---
Group.hasMany(Schedule, { foreignKey: 'group_id', onDelete: 'CASCADE' });
Schedule.belongsTo(Group, { foreignKey: 'group_id', onDelete: 'CASCADE' });

// --- Group & Lesson ---
Group.hasMany(Lesson, { foreignKey: 'group_id', onDelete: 'CASCADE' });
Lesson.belongsTo(Group, { foreignKey: 'group_id', onDelete: 'CASCADE' });

// --- DanceStyle & Lesson ---
DanceStyle.hasMany(Lesson, { foreignKey: 'direction_id', onDelete: 'SET NULL' });
Lesson.belongsTo(DanceStyle, { foreignKey: 'direction_id', onDelete: 'SET NULL' });

// --- Student & Attendance ---
Student.hasMany(Attendance, { foreignKey: 'student_id', onDelete: 'CASCADE' });
Attendance.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });

// --- Lesson & Attendance ---
Lesson.hasMany(Attendance, { foreignKey: 'lesson_id', onDelete: 'CASCADE' });
Attendance.belongsTo(Lesson, { foreignKey: 'lesson_id', onDelete: 'CASCADE' });

// --- Student & Payment ---
Student.hasMany(Payment, { foreignKey: 'student_id', onDelete: 'CASCADE' });
Payment.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });

// --- Subscription & Payment ---
Subscription.hasMany(Payment, { foreignKey: 'subscription_id', onDelete: 'CASCADE' });
Payment.belongsTo(Subscription, { foreignKey: 'subscription_id', onDelete: 'CASCADE' });

// --- Lesson & LessonPayment ---
Lesson.hasMany(LessonPayment, { foreignKey: 'lesson_id', onDelete: 'CASCADE' });
LessonPayment.belongsTo(Lesson, { foreignKey: 'lesson_id', onDelete: 'CASCADE' });

// --- Student & LessonPayment ---
Student.hasMany(LessonPayment, { foreignKey: 'student_id', onDelete: 'CASCADE' });
LessonPayment.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });

// --- LessonSubscription: связь с Lesson, Student, StudentSubscription ---
Lesson.hasMany(LessonSubscription, { foreignKey: 'lesson_id', onDelete: 'CASCADE' });
LessonSubscription.belongsTo(Lesson, { foreignKey: 'lesson_id', onDelete: 'CASCADE' });

Student.hasMany(LessonSubscription, { foreignKey: 'student_id', onDelete: 'CASCADE' });
LessonSubscription.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });

StudentSubscription.hasMany(LessonSubscription, { foreignKey: 'subscription_id', onDelete: 'CASCADE' });
LessonSubscription.belongsTo(StudentSubscription, { foreignKey: 'subscription_id', onDelete: 'CASCADE' });

// --- TeacherRatePolicy & TeacherRate ---
TeacherRatePolicy.hasMany(TeacherRate, { foreignKey: 'policy_id', onDelete: 'CASCADE' });
TeacherRate.belongsTo(TeacherRatePolicy, { foreignKey: 'policy_id', onDelete: 'CASCADE' });

// --- TeacherRate & TeacherRateRule ---
TeacherRatePolicy.hasMany(TeacherRateRule, { foreignKey: 'policy_id', onDelete: 'CASCADE' });
TeacherRateRule.belongsTo(TeacherRatePolicy, { foreignKey: 'policy_id', onDelete: 'CASCADE' });




export {
    sequelize,
    School, UserAccount, UserProfile, Source, Status, Lead,
    Client, Student, StudentClient, Subscription,
    StudentSubscription, SubscriptionPause, Group, LeadGroup, ClientGroup, StudentGroup,
    DanceStyle, Schedule, Lesson, Attendance,
    Payment, LessonPayment, FinancialReport, LessonSubscription,
    TeacherRatePolicy, TeacherRate, TeacherRateRule,
};

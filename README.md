Interfaces:
টাইপস্ক্রিপ্টে Interfaces একটি object এর property এর মান বা function এর data এর ধরন declare করতে ব্যবহৃত হয়। অর্থাৎ একটি object মধ্যে থাকা property value বা function এর data type এর ধরন বা type নির্ধারণ করতে interfaces ব্যবহার হয়।

Types:
TypesScript-এ types হলো ডেটার type বা structure নির্ধারণ করার একটি আরও অধিকতর ব্যাপক একটি উপায়। Types ও interfaces এর মত ডেটার type ঘোষণা করতেও ব্যবহৃত হয়, তবে এর ব্যবহারক্ষেত্র interfaces-এর তুলনায় আরও বিস্তৃত।

Types এবং Interfaces ইন্টারফেসের মধ্যে পার্থক্য:

1. Type Interface চেয়ে বেশি নমনীয়। Types objects, unions, primitives, tuples, intersections এবং আরও অনেক ক্ষ্রেত্রে ব্যবহার করা যায়। অন্যদিকে ইন্টারফেসের ব্যবহারক্ষেত্র শুধুমাত্র object বা class আকৃতি বর্ণনাতেই সীমিত।
2. Types এ একই name দিয়ে বার বার declare করা যায় না, error দেখাবে

Interface: একই name দিয়ে বার বার declare করা যায়; TypeScript এগুলোকে automatically merge করে দেয়।


Any:

যেকোনো মান রাখতে পারে—string, number, object ইত্যাদি।

TypeScript এর usage যাচাই করে না, তাই এর উপর যেকোনো property বা method ব্যবহার করা যায়।

Unsafe, কারণ এটি type checking এড়িয়ে চলে।

unknown

এটিও যেকোনো মান রাখতে পারে, কিন্তু ব্যবহার করার আগে type checking বাধ্যতামূলক।

any-এর চেয়ে নিরাপদ, কারণ আগে type নির্ধারণ (narrow) করতে হয়।

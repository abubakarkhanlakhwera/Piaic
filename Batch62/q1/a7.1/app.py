class Student:
    def __init__(self, name, scores):
        self.name = name
        self.scores = scores

    def calculate_average(self):
        return sum(self.scores) / len(self.scores) if self.scores else 0

    def is_passing(self):
        passing_score = 40
        return all(score >= passing_score for score in self.scores)
class PerformanceTracker:
    def __init__(self):
        self.students = {}

    def add_student(self, name, scores):
        self.students[name] = Student(name, scores)

    def calculate_class_average(self):
        total_scores = sum(student.calculate_average() for student in self.students.values())
        return total_scores / len(self.students) if self.students else 0

    def display_student_performance(self):
        for student in self.students.values():
            avg_score = student.calculate_average()
            status = "Passing" if student.is_passing() else "Needs Improvement"
            print(f"{student.name}: Average Score = {avg_score:.2f}, Status: {status}")
def get_student_data():
    while True:
        name = input("Enter student name (or type 'exit' to finish): ")
        if name.lower() == 'exit':
            break
        scores = []
        for subject in ["Math", "Science", "English"]:
            while True:
                try:
                    score = int(input(f"Enter score for {subject}: "))
                    scores.append(score)
                    break
                except ValueError:
                    print("Invalid input. Please enter a numeric score.")
        yield name, scores
def main():
    tracker = PerformanceTracker()

    for name, scores in get_student_data():
        tracker.add_student(name, scores)

    print("\nStudent Performance:")
    tracker.display_student_performance()
    
    class_average = tracker.calculate_class_average()
    print(f"\nClass Average Score: {class_average:.2f}")

if __name__ == "__main__":
    main()

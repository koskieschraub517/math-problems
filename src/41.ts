import sys
def main():
    # Your main function implementation here
    pass

if __name__ == "__main__":
    if len(sys.argv) >= 2 and sys.argv[1] == "--help":
        print("Usage: python problem_generator.py")
        sys.exit()
    
    while True:
        try:
            num = int(input("Enter a number (or 'q' to quit): "))
            break
        except ValueError:
            print("Invalid input. Please enter an integer.")

main()

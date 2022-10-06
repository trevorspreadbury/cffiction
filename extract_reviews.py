import json
from pathlib import Path

here = Path(__file__).resolve().parent
reviews_directory = here / "public" / "reviews"
    
def extract_reviews(filename: Path):
    book = filename.stem
    with open(filename, "r") as f:
        text = f.read()

    output_dicts = []

    for id, review in enumerate(text.split("\n\n")):
        review_lines = review.split("\n")
        review_dict = {
            "name": review_lines[0],
            "quoteText": review_lines[1][19:],
            "date": review_lines[2].split("on ")[-1],
            "classname": "review-item",
            "img": './assets/images/clients/test-1.jpg',
            "alt": "images",
            "id": id,
            "novel": book,
        }
        start_line = 3 if review_lines[3] != "Verified Purchase" else 4
        review_dict["text"] = " ".join(review_lines[start_line:])
        output_dicts.append(review_dict)
    with open(reviews_directory / (book + ".json"), "w+") as f:
        json.dump(output_dicts, f)
    

if __name__ == "__main__":
    for file in reviews_directory.iterdir():
        if file.suffix == ".txt":
            extract_reviews(reviews_directory / file)

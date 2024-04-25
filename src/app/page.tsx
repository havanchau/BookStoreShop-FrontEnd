"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images, Icons } from "../../public/assets";
import ImageSlider from "@/components/ImageSlider";
import CountdownTimer from "@/components/CountDownTimer";
import { title } from "process";

interface Book {
  imageLink: string;
  title: string;
  price: number;
  discount: number;
  sale: number;
}

const books: Book[] = [
  {
    imageLink: Images.bookSales[0],
    title:
      "Life BRE A1-A2: Student Book With Web App Code And Online Workbook 2nd Edition",
    price: 213200,
    discount: 18,
    sale: 7,
  },
  {
    imageLink: Images.bookSales[0],
    title:
      "Life BRE A1-A2: Student Book With Web App Code And Online Workbook 2nd Edition",
    price: 213200,
    discount: 18,
    sale: 7,
  },
  {
    imageLink: Images.bookSales[0],
    title:
      "Life BRE A1-A2: Student Book With Web App Code And Online Workbook 2nd Edition",
    price: 213200,
    discount: 18,
    sale: 7,
  },
  {
    imageLink: Images.bookSales[0],
    title:
      "Life BRE A1-A2: Student Book With Web App Code And Online Workbook 2nd Edition",
    price: 213200,
    discount: 18,
    sale: 7,
  },
  {
    imageLink: Images.bookSales[0],
    title:
      "Life BRE A1-A2: Student Book With Web App Code And Online Workbook 2nd Edition",
    price: 213200,
    discount: 18,
    sale: 7,
  },

  {
    imageLink: Images.bookSales[0],
    title:
      "Life BRE A1-A2: Student Book With Web App Code And Online Workbook 2nd Edition",
    price: 213200,
    discount: 18,
    sale: 7,
  },
  {
    imageLink: Images.bookSales[0],
    title:
      "Life BRE A1-A2: Student Book With Web App Code And Online Workbook 2nd Edition",
    price: 213200,
    discount: 18,
    sale: 7,
  },
  {
    imageLink: Images.bookSales[0],
    title: "Life",
    price: 999900,
    discount: 18,
    sale: 7,
  },
  {
    imageLink: Images.bookSales[0],
    title:
      "Life BRE A1-A2: Student Book With Web App Code And Online Workbook 2nd Edition",
    price: 213200,
    discount: 18,
    sale: 7,
  },
  {
    imageLink: Images.bookSales[0],
    title:
      "Life BRE A1-A2: Student Book With Web App Code And Online Workbook 2nd Edition",
    price: 213200,
    discount: 18,
    sale: 7,
  },
];

export default function Home() {
  const targetDate = new Date(2024, 3, 15, 12, 0, 0);
  const [indexBook, setIndexBook] = React.useState(0);

  return (
    <main className="w-full">
      <div className="mt-12 flex items-center justify-between mb-12 mx-20">
        <ImageSlider images={Images.banner} />
        <div className="flex-col items-end justify-end">
          <Image
            src={Images.smallBanner[0]}
            alt="Image"
            width={392}
            height={150}
            className="mb-2 rounded-xl"
          />
          <Image
            src={Images.smallBanner[1]}
            alt="Image"
            width={392}
            height={150}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="bg-blue-500 rounded-xl flex-row">
        <div className="opacity-0 h-10"></div>
        <div className="h-20 flex mx-20 bg-white rounded-xl hover:bg-gray-100 hover:cursor-pointer">
          <Image
            src={Images.label}
            alt="Label"
            className="ml-8"
            width={200}
            height={200}
          />
          <div className="text-2xl font-medium flex items-center pl-8 pr-2">
            Kết thúc trong:
          </div>
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className="mx-20 rounded-xl mt-8 flex items-center justify-between">
          <button
            className=""
            onClick={() => setIndexBook(indexBook > 0 ? indexBook - 1 : 0)}
          >
            <Image
              src={Icons.leftBtn}
              alt="Left Button"
              width={36}
              height={36}
              className="top-0"
            />
          </button>
          {books.slice(indexBook, indexBook + 5).map((book, index) => (
            <Link
              key={index}
              href=""
              className="bg-white py-2 px-1 rounded-xl w-1/6"
            >
              <Image
                src={book.imageLink}
                alt="Book Image"
                className=""
                width={220}
                height={170}
              />
              <div className="mx-4">
                <div className="text-normal font-medium h-8 overflow-hidden mt-2">
                  {book.title.slice(0, 20)} {"..."}
                </div>
                <div className="flex items-center">
                  <div className="text-normal font-semibold text-red-600">
                    {book.price}
                    {"VNĐ"}
                  </div>
                  <div className="ml-6 px-2 bg-red-600 text-white font-semibold text-sm py-1 rounded-lg">
                    {book.discount}
                    {"%"}
                  </div>
                </div>
                <div className="w-full flex items-center mt-2">
                  <div className="bg-blue-500 w-1/3 h-3 rounded-bl-lg rounded-tl-lg"></div>
                  <div
                    className="bg-gray-200 w-2/3 h-3 rounded-br-lg rounded-tr-lg"
                    style={{ width: "66.66%" }}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
          <button
            className=""
            onClick={() => {
              setIndexBook(
                indexBook + 1 < books.length / 5 ? indexBook + 1 : indexBook
              );
              console.log(indexBook);
            }}
          >
            <Image
              src={Icons.rightBtn}
              alt="Right Button"
              width={36}
              height={36}
              className="top-0"
            />
          </button>
        </div>
        <div className="opacity-0 h-10"></div>
      </div>

      <div className="mx-20"></div>
    </main>
  );
}

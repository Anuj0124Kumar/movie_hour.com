import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ThreeCircles } from "react-loader-spinner";
import Reviews from "./Reviews";

export default function Details() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    year: "",
    image: "",
    downloadLink: "",
    description: "",
    rating: 0,
    rated: 0,
  });

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
      console.log(data.image);
    }
    getData();
  }, []);
  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row justify-center w-full">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center">
          <ThreeCircles height={70} color="white" />
        </div>
      ) : (
        <>
          <img className="h-96 md:sticky top-24" src={data.image} alt="" />
          <div className="md:ml-4 ml-0 w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-grey-400">
              {data.title}
              <span className="text-lg">({data.year})</span>
            </h1>
            <ReactStars
              size={20}
              half={true}
              value={data.rating / data.rated}
              edit={false}
            />
            <p className="mt-3">{data.description}</p>
            <a
              href={data.downloadLink}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              Click to Download
            </a>
            <Reviews id={id} prevRating={data.rating} userRated={data.rated} />
          </div>
        </>
      )}
    </div>
  );
}

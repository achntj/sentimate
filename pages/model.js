import React from "react";
import Head from "next/head";

import link from "../lib/link";

function model() {
  return (
    <>
      <Head>
        <meta http-equiv="refresh" content={`1; url=${link}`} />
      </Head>
      <div class="entry">
        <p>
          Redirecting you to the model!
          <br />
          If not redirected, click <a href={link}>here</a>.
        </p>
      </div>
    </>
  );
}

export default model;

import * as React from 'react';
import { useEffect } from 'react';
import * as yup from 'yup';
import { motion } from 'framer-motion';
// import Dotnav from '@/components/global/buttons/matrix/Dotnav';
import { Formik, Form, Field } from 'formik';
import { forces, lengths } from '@/lib/config/forms/truss';
import { trussCheck } from '@/lib/utils/matrix/calculate';
import Success from '@/components/global/alerts/Success';
import Error from '@/components/global/alerts/Error';
import Back from '@/components/global/buttons/matrix/Back';
import Forward from '@/components/global/buttons/matrix/Forward';
import styles from '@/styles/components/Steps.module.scss';

let nodeMatrix = [];

const StepTwo = (props) => {
  const [unitIndex] = React.useState(props.data.units - 1);
  const [m] = React.useState(props.data.members);
  const [n] = React.useState(props.data.nodes);
  const [r] = React.useState(props.data.reactions);
  const [forceUnits, setForceUnits] = React.useState('');
  const [lengthUnits, setLengthUnits] = React.useState('');

  // let timer: null | ReturnType<typeof setTimeout> = null;

  const check = trussCheck(m, n, r);
  const [show, setShow] = React.useState(check);

  let C = [];

  /* The following useEffect hook will set the display alert state variable
  to truthy if the system is indeterminate and falsey if else. */
  useEffect(() => {
    if (show == 1) {
      let timer = setTimeout(() => setShow(1), 5000);
      clearTimeout(timer);

      setShow(0);
    }
  }, []);

  // UseEffect hook to assemble node coordinate matrix
  useEffect(() => {
    for (let i = 0; i < n; i++) {
      let j = i + 1;
      nodeMatrix[i] = [j];
    };
  }, [nodeMatrix]);

  // UseEffect hook to map the proper units selected
  useEffect(() => {
    if (unitIndex) {
      setForceUnits(forces[unitIndex]);
      setLengthUnits(lengths[unitIndex]);
    };
  }, [forceUnits, lengthUnits]);

  // Handle next form step
  const handleSubmit = (values) => {
    props.next(values);
  };

  const stepTwoSchema = yup.object({
    x1: yup.number().defined(),
    y1: yup.number().defined(),
    x2: yup.number().defined(),
    y2: yup.number().defined(),
  });

  // Testing the output
  // console.log(currentUnits);
  // console.log(forceUnits);
  // console.log(lengthUnits);
  // console.log(numNodes);
  // console.log(nodeMatrix);

  return (
    <>

      {/* Header */}
      <h2 className={styles.label}>
        Step 2. <span className={styles.span}>
          Node coordinates
        </span>
      </h2>

      {/* Dotnav container for component render */}
      {/* <div className={styles.dotnavContainer}>
        <Dotnav props={props.step} />
      </div> */}

      {/* Form parent container */}
      <Formik
        validationSchema={stepTwoSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form id={styles.form} className='uk-form-horizontal uk-margin-large'>

            {show == 1 ? <Success props={props} /> : null}
            {show == 2 ? <Error props={props} /> : null}

            {/* Iterate n times (where n = {number of nodes})
              and display xn, yn coordinate inputs for the user */}
            {nodeMatrix.map((j: number) => (
              <div key={j} id={styles.steptwo} className={styles.row}>
                <div className='uk-width-2-3'>
                  <h6 className={styles.field}>
                    Coordinates for Node {j}
                  </h6>
                </div>
                <div className='uk-width-1-3'>
                  <Field
                    name='x1'
                    id={styles.input}
                    className='uk-input'
                    type='text'
                    placeholder=
                  />
                  <Field
                    name='y1'
                    id={styles.input}
                    className='uk-input'
                    type='text'
                    placeholder=''
                  />
                </div>
              </div>
            ))}

            {/* Navigation buttons - back & forward */}
            <div className='uk-width-1-1'>
              <motion.button
                id={styles.iconButton}
                type='button'
                className='uk-button uk-align-left'
                onClick={() => props.prev(values)}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Back />
              </motion.button>
              <motion.button
                id={styles.iconButton}
                type='submit'
                className='uk-button uk-align-right'
                onClick={() => props.next(values)}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Forward />
              </motion.button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
};

export default StepTwo;
